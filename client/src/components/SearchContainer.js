import React from "react";
import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    yearOptions,
    handleChange,
    clearFilters,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          ></FormRow>
          {/* search by status */}
          <FormRowSelect
            labelText="status of vehicle"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          ></FormRowSelect>
          {/* search by year */}
          <FormRowSelect
            labelText="year of manufacture"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...yearOptions]}
          ></FormRowSelect>
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          ></FormRowSelect>
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={clearFilters}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
