"use client";
import { Event } from "types/dataTypes";
import Link from "next/link";
import Image from "next/image";
import useQueryParams from "hooks/useQueryParams";
import dayjs from "dayjs";
import Tooltip from "@mui/material/Tooltip";
import { stringifyQueryParams } from "lib/stringifyQueryParams";

/**
 *
 * Component responsible for rendering a source search result item for photo.
 *
 * @component
 * @param {Event} event - The source data to be displayed, including url to thumbnail.
 *
 * @returns {React.ReactNode} A rendered photo-source search result item with hover effects.
 */
const ResultItem = ({ event }: { event: Event }) => {
  const { queryParams } = useQueryParams<Record<string, string | string[]>>();
  const searchParams = stringifyQueryParams(queryParams);

  const formattedStartDate = event.start
    ? dayjs(event.start).format("dddd D. MMMM YYYY")
    : null;

  return (
    <Link
      href={`/arrangementer/${event.id}${searchParams && `?${searchParams}`}`}
      className="flex max-h-[50vh] flex-col px-6 pt-5 pb-2 shadow-none"
    >
      <header>
        <Tooltip title={event.title || "Arrangement uten tittel"} arrow>
          <h3 className="text-md font-medium line-clamp-2 leading-tight">
            {event.title || "Arrangement uten tittel"}
          </h3>
        </Tooltip>
      </header>
      <div className="mt-3 mb-1">
        <div className="bg-sky-200 inline-flex items-center rounded-[3px] px-2 py-1">
          <span className="text-sm leading-none">{formattedStartDate}</span>
        </div>
        <div className="mt-2 flex flex-col text-sm leading-none">
          <p>
            <b>Tid: </b>
            {event.startTime}-{event.endTime}{" "}
          </p>
          <p className="h-8 line-clamp-2">
            <b>Sted: </b>
            {event.location || "Sted ikke oppgitt"}
          </p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.imageText || "Arrangement uten bildebeskrivelse"}
          className="object-cover"
          height={355}
          width={300}
        />
        {event.language === "en" && (
          <div className="absolute bottom-[10%] z-10 left-[5%]">
            <div className="rounded-[2px] bg-green-600 text-white text-sm leading-none px-2 py-1">
              <div>{"Engelsk"}</div>
            </div>
          </div>
        )}
      </div>
      <footer className="mt-auto mb-1 px-1"></footer>
    </Link>
  );
};

export default ResultItem;
