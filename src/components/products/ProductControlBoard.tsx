import React, { useEffect, useState } from "react";
import ArrowIcon from "../../images/icons/ArrowIcon";
import { Product } from "../../utils/types";
import Loading from "../layout/Loading";
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
  loading: Boolean;
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

const ProductControlBoard = ({ products, loading }: Props) => {
  const [hideFilters, setHideFilters] = useState(false);
  const [sortBy, setSortBy] = useState("new");
  const [filtered, setFiltered] = useState(products);
  const [appliedFilters, setAppliedFilters] = useState<String[]>([]);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const copy = [...products];
    switch (sortBy) {
      case "new":
        setFiltered(products);
        console.log(products);
        console.log("new");
        break;
      case "price - low to high":
        setFiltered(
          copy.sort((a, b) => {
            return +a.price - +b.price;
          })
        );
        console.log("low to high");
        break;
      case "price - high to low":
        setFiltered(
          copy.sort((a, b) => {
            return +b.price - +a.price;
          })
        );
        console.log("high to low");
        break;
      case "name":
        setFiltered(
          copy.sort((a, b) => {
            let fa = a.title.toLowerCase(),
              fb = b.title.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          })
        );
        console.log("name");
        break;
      case "best sellers":
        console.log("best sellers");
        break;
      case "featured":
        console.log("featured");
        break;
      default:
        setFiltered(products);
        console.log("default");
        break;
    }
  }, [sortBy, products]);

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
                <li onClick={() => setSortBy("price - high to low")}>
                  PRICE - HIGH TO LOW
                </li>
                <li onClick={() => setSortBy("name")}>NAME</li>
                {/* <li onClick={() => setSortBy("best sellers")}>BEST SELLERS</li> */}
                {/* <li onClick={() => setSortBy("featured")}>FEATURED</li> */}
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
        {loading ? (
          <div className='loadingWrapper'>
            <Loading color='var(--brand-color)' />
          </div>
        ) : (
          <div className='productSection'>
            {filtered.map((product) => (
              <ProductCard key={product._id.toString()} product={product} />
            ))}
          </div>
        )}
      </div>
    </ControlBoardStyled>
  );
};

export default ProductControlBoard;
