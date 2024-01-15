'use client'
import { useState } from 'react';

const list: string[] = [
    'Virat Kohli',
    'MS Dhoni' ,
    'Rohit Sharma' ,
    'Hardik Pandya' ,
    'Sikhar Dhawan'
  // Add more predefined users as needed
];

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    const filteredUsers = list.filter(
      (item) =>
        item.toLowerCase().includes(query.toLowerCase()) &&
        !selectedUsers.includes(item)
    );
    setFilters(filteredUsers);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
    handleSearch(query);
  };

  const handleFilter = (user: string) => {
    setSelectedUsers([...selectedUsers, user]);
    setSearchTerm('');
    setFilters([]);
  };

  const handleRemoveItems = (user: string) => {
    const updatedList = selectedUsers.filter((selectedUser) => selectedUser !== user);
    setSelectedUsers(updatedList);
  };

  return (
    <div className="w-full h-full mx-auto my-8 p-4 bg-gray-100 rounded ">
      <div className="flex flex-wrap gap-2 tags-input" >
        {selectedUsers.map((user, index) => (
          <div key={index} className="bg-cyan-500 text-white p-2 rounded cursor-pointer" onClick={() => handleRemoveItems(user)}>
            {user} x
          </div>
        ))}
        <input
            type="text"
            placeholder="Enter Keyword"
            value={searchTerm}
            onChange={handleChange}
            className="w-full mt-4 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
        />
      </div>
      
      {filters.length > 0 && (
        <ul className="mt-2">
          {filters.map((item, index) => (
            <li key={index} onClick={() => handleFilter(item)} className="cursor-pointer text-blue-500 hover:underline">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
