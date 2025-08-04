const SearchBar = () => (
  <div className="flex justify-center my-6">
    <div className="flex items-center w-96 bg-purple-500 rounded-full px-4 py-3 hover:bg-purple-600 transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-5 h-5 mr-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
      </svg>
      <span className="text-white text-lg">Search Restaurant</span>
    </div>
  </div>
);

export default SearchBar;
