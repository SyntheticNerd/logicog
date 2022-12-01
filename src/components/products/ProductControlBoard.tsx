import React, { useState } from "react";
import ArrowIcon from "../../images/icons/ArrowIcon";
import { Product } from "../../utils/types";
import {
  ControlBarStyled,
  ControlBoardStyled,
  FilterBtnStyled,
  FiltersStyled,
  SortDropDownStyled,
} from "./ControlBoardStyled";
import ProductCard from "./productCard/ProductCard";

interface Props {
  products: Product[];
}

const filterList = [
  {
    title: "POWER DELIVERY",
    list: [
      "POWERPLAY Compatibility",
      "Corded",
      "Rechargeable",
      "POWERPLAY",
      "Alkaline Batteries",
    ],
  },
  {
    title: "LIGHTING",
    list: ["LIGHTSYNC RGB"],
  },
  {
    title: "CONNECTIVITY",
    list: ["Wired", "Bluetooth", "LIGHTSPEED Wireless"],
  },
  {
    title: "SERIES",
    list: ["G", "PRO"],
  },
  {
    title: "SENSOR",
    list: ["Optical Sensor", "HERO 25K Sensor"],
  },
];

const ProductControlBoard = ({ products }: Props) => {
  const [hideFilters, setHideFilters] = useState(false);
  const [sortBy, setSortBy] = useState("new");
  const [appliedFilters, setAppliedFilters] = useState<String[]>([]);
  const [dropDown, setDropDown] = useState(false);

  return (
    <ControlBoardStyled>
      <div className='controlBarWrapper'>
        <ControlBarStyled>
          <FilterBtnStyled onClick={() => setHideFilters((prev) => !prev)}>
            HIDE FILTERS
          </FilterBtnStyled>
          <SortDropDownStyled dropDown={dropDown}>
            <button onClick={() => setDropDown((prev) => !prev)}>
              SORT BY: {sortBy.toUpperCase()} <ArrowIcon />
            </button>
            {dropDown && (
              <ul>
                <li onClick={() => setSortBy("new")}>NEW</li>
                <li onClick={() => setSortBy("price - low to high")}>
                  PRICE - LOW TO HIGH
                </li>
                <li onClick={() => setSortBy("price = high to low")}>
                  PRICE - HIGH TO LOW
                </li>
                <li onClick={() => setSortBy("name")}>NAME</li>
                <li onClick={() => setSortBy("best sellers")}>BEST SELLERS</li>
                <li onClick={() => setSortBy("featured")}>FEATURED</li>
              </ul>
            )}
          </SortDropDownStyled>
        </ControlBarStyled>
      </div>

      <div className='bottom'>
        {!hideFilters && (
          <FiltersStyled>
            {filterList.map((section) => (
              <div key={section.title}>
                <h3>{section.title}</h3>
                <ul>
                  {section.list.map((filter) => (
                    <li key={filter}>
                      <input type='checkbox' name={filter} id={filter} />
                      <label htmlFor={filter}>{filter}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </FiltersStyled>
        )}

        <div className='productSection'>
          {products.map((product) => (
            <ProductCard key={product._id.toString()} product={product} />
          ))}
        </div>
      </div>
    </ControlBoardStyled>
  );
};

export default ProductControlBoard;
