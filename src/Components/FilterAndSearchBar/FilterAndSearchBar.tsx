import { ChangeEvent, useEffect, useRef, useState } from "react";

interface FilterAndSearchBarProps<T> {
  items: T[];
  onApply: (filteredItems: T[]) => void;
  searchFunction: (items: T[], searchTerm: string) => T[];
  sortFunction: (items: T[], order: "asc" | "desc" | undefined) => T[];
}

export default function FilterAndSearchBar<T>({
  items,
  onApply,
  searchFunction,
  sortFunction,
}: FilterAndSearchBarProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"asc" | "desc">();

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchTerm(value);
  }

  function handleFilter(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as "asc" | "desc";
    setFilter(value);
  }

  useEffect(() => {
    const filteredItems = searchFunction(items, searchTerm);
    const sortedItems = sortFunction(filteredItems, filter);

    onApply(sortedItems);
  }, [searchTerm, filter]);

  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="mdi mdi-magnify" />
          </span>
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            aria-label="Search-input"
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="col-sm-4">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="mdi mdi-filter-outline" />
          </span>
          <select
            className="form-select"
            ref={selectRef}
            onChange={handleFilter}
            defaultValue={"default"}
          >
            <option disabled value={"default"}>
              Choose filter option
            </option>
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
          </select>
        </div>
      </div>
    </div>
  );
}
