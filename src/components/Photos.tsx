import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { ColorContext, ColorDispatchContext } from "./Provider/ColorProvider";
import PortalModal from "./UI/PortalModal";
import LoadingCircle from "../components/UI/LoadingCircle";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import ColorFilter from "./ColorFilter";
import { Photo } from "../types";

export default function PhotosComponent() {
  const { search } = useParams();
  const navigateTo = useNavigate();

  const [selectedPhoto, setSelectedPhoto] = useState<Photo>();
  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<any>(1);
  const { ref, inView } = useInView();
  const [searchedPhoto, setSearchedPhoto] = useState<string>("undefined");

  const color = React.useContext(ColorContext);
  const location = useLocation();

  const getSearchProducts = async ({ pageParam }: any): Promise<void> => {
    if (typeof pageParam != "undefined" && pageParam !== null) {
      setPage(pageParam);
    }
    if (!open)
      return axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${
            import.meta.env.VITE_YOUR_ACCESS_KEY
          }`,
          {
            params: {
              query: searchedPhoto,
              page: pageParam,
              color: color.selectedColor,
            },
          }
        )
        .then((res) => res.data)
        .catch((err) => console.log("err", err));
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<any>(
      ["results", searchedPhoto, color.selectedColor],
      getSearchProducts,
      {
        getNextPageParam: (response: any) =>
          response?.total / response?.results.length < response?.total_pages
            ? page + 1
            : undefined,
      }
    );

  const openPhoto = async (photo: Photo) => {
    await setSelectedPhoto(photo);
    setOpen(true);
    navigateTo(`/photos/${photo.id}`);
  };

  const handleClose = () => {
    setOpen(false);
    navigateTo(-1);
  };

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    getSearchProducts(1);
  }, [search]);

  useEffect(() => {
    if (search !== undefined) setSearchedPhoto(search);
  }, [search]);

  useEffect(() => {
    if (location.pathname === "/") setSearchedPhoto("undefined");
  }, [location]);

  return (
    <div className="container">
      <ColorFilter />
      {searchedPhoto !== "undefined" && (
        <h1 className="text-4xl pt-7 capitalize font-bold">{searchedPhoto}</h1>
      )}

      <div className="grid items-center pt-7">
        <div className="mx-auto sm:columns-2 md:columns-3 max-w-7xl space-y-4">
          {data?.pages
            .flatMap((page: any) => page?.results)
            .map((photo: Photo, idx: number) => (
              <img
                key={`photo-${idx}`}
                src={photo?.urls.full}
                alt={photo?.alt_description}
                sizes="(min-width: 1335px) 410.6666666666667px, (min-width: 992px) calc(calc(100vw - 88px) / 3), (min-width: 768px) calc(calc(100vw - 64px) / 2), 100vw"
                onClick={() => openPhoto(photo)}
                className="cursor-zoom-in"
              />
            ))}
          {!data?.pages[data?.pages.length - 1]?.results?.length && (
            <>
              <div></div>
              <div className="flex justify-center w-full items-center">
                <FaceFrownIcon className="h-12 w-12 text-gray" />
              </div>
              <div></div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center py-6">
        <button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? (
            <LoadingCircle />
          ) : hasNextPage ? (
            <LoadingCircle />
          ) : (
            ""
          )}
        </button>
      </div>
      {open && (
        <PortalModal
          open={open}
          handleClose={handleClose}
          selectedPhoto={selectedPhoto}
        />
      )}
    </div>
  );
}
