"use client";

import { useMemo, useState } from "react";

import { Search } from "lucide-react";

import { recentShipments } from "@/data/dashboard";

import RecentShipmentRow from "./RecentShipmentRow";

export default function RecentShipmentsTable() {
  const [searchValue, setSearchValue] =
    useState("");

  const [selectedShipmentIds, setSelectedShipmentIds] =
    useState<string[]>([]);

  const filteredShipments = useMemo(() => {
    const query =
      searchValue.trim().toLowerCase();

    if (!query) {
      return recentShipments;
    }

    return recentShipments.filter(
      (shipment) =>
        shipment.id
          .toLowerCase()
          .includes(query) ||
        shipment.company
          .toLowerCase()
          .includes(query) ||
        shipment.carrier
          .toLowerCase()
          .includes(query) ||
        shipment.route
          .toLowerCase()
          .includes(query)
    );
  }, [searchValue]);

  const allVisibleSelected =
    filteredShipments.length > 0 &&
    filteredShipments.every((shipment) =>
      selectedShipmentIds.includes(
        shipment.id
      )
    );

  function handleShipmentSelection(
    shipmentId: string,
    checked: boolean
  ) {
    setSelectedShipmentIds((currentIds) => {
      if (checked) {
        return [
          ...currentIds,
          shipmentId,
        ];
      }

      return currentIds.filter(
        (id) => id !== shipmentId
      );
    });
  }

  function handleSelectAll(
    checked: boolean
  ) {
    if (checked) {
      setSelectedShipmentIds(
        filteredShipments.map(
          (shipment) => shipment.id
        )
      );

      return;
    }

    setSelectedShipmentIds([]);
  }

  return (
    <section
      className="
        h-[404px]
        w-[858px]
        rounded-[12px]
        bg-[#FEFEFE]
        p-[16px]
      "
    >
      {/* Header */}
      <header
        className="
          flex
          h-[28px]
          w-[826px]
          items-center
          justify-between
        "
      >
        <h2
          className="
            h-[19px]
            w-[135px]
            text-[16px]
            font-bold
            leading-[120%]
            text-[#333333]
          "
        >
          Recent Shipments
        </h2>

        <div
          className="
            flex
            h-[28px]
            w-[303px]
            items-center
            gap-[12px]
          "
        >
          {/* Search */}
          <div
            className="
              flex
              h-[28px]
              w-[223px]
              items-center
              gap-[6px]
              rounded-[8px]
              bg-[#F0F0F0]
              px-[8px]
              py-[6px]
            "
          >
            <Search
              size={11}
              strokeWidth={1.5}
              className="shrink-0 text-[#757575]"
            />

            <label
              htmlFor="recent-shipment-search"
              className="sr-only"
            >
              Search recent shipments
            </label>

            <input
              id="recent-shipment-search"
              type="search"
              value={searchValue}
              onChange={(event) =>
                setSearchValue(
                  event.target.value
                )
              }
              placeholder="Search shipment"
              className="
                min-w-0
                flex-1
                bg-transparent
                text-[8px]
                text-[#55575C]
                outline-none
                placeholder:text-[#9A9CA2]
              "
            />
          </div>

          {/* Action button */}
          <button
            type="button"
            aria-label="Recent shipment options"
            className="
              flex
              h-[28px]
              w-[28px]
              items-center
              justify-center
              rounded-[8px]
              bg-[#F0F0F0]
              text-[10px]
              text-[#757575]
              transition-colors
              hover:bg-[#E6E6E6]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#856DF3]
            "
          >
            ≡
          </button>
        </div>
      </header>

      {/* Table */}
      <div
        className="
          mt-[16px]
          h-[328px]
          w-[826px]
          overflow-hidden
        "
      >
        <table
          className="
            w-full
            table-fixed
            border-collapse
          "
        >
          <thead>
            <tr
              className="
                h-[42px]
                rounded-[8px]
                bg-[#E3DDFF]
              "
            >
              {/* Select all */}
              <th className="w-[32px] px-[10px] text-left">
                <input
                  type="checkbox"
                  checked={allVisibleSelected}
                  onChange={(event) =>
                    handleSelectAll(
                      event.target.checked
                    )
                  }
                  aria-label="Select all visible shipments"
                  className="
                    h-[12px]
                    w-[12px]
                    cursor-pointer
                    appearance-none
                    rounded-[3px]
                    border
                    border-[#E0E0E0]
                    bg-[#F0F0F0]
                    checked:border-[#856DF3]
                    checked:bg-[#856DF3]
                  "
                />
              </th>

              <th className="w-[95px] px-[4px] text-left text-[8px] font-medium text-[#55575C]">
                Shipping ID
              </th>

              <th className="w-[130px] px-[4px] text-left text-[8px] font-medium text-[#55575C]">
                Company
              </th>

              <th className="w-[65px] px-[4px] text-left text-[8px] font-medium text-[#55575C]">
                Carriers
              </th>

              <th className="w-[205px] px-[4px] text-left text-[8px] font-medium text-[#55575C]">
                Route
              </th>

              <th className="w-[90px] px-[4px] text-left text-[8px] font-medium text-[#55575C]">
                Shipping Date
              </th>

              <th className="px-[4px] text-right text-[8px] font-medium text-[#55575C]">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredShipments.map(
              (shipment) => (
                <RecentShipmentRow
                  key={shipment.id}
                  shipment={shipment}
                  checked={selectedShipmentIds.includes(
                    shipment.id
                  )}
                  onCheckedChange={
                    handleShipmentSelection
                  }
                />
              )
            )}
          </tbody>
        </table>

        {/* Empty search state */}
        {filteredShipments.length === 0 && (
          <div
            className="
              flex
              h-[260px]
              items-center
              justify-center
              text-[12px]
              text-[#757575]
            "
          >
            No shipments found.
          </div>
        )}
      </div>
    </section>
  );
}