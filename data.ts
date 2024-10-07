type Friend = {
  id: number;
  name: string;
  age: number;
  nationality: string;
};

type User = {
  id: number;
  name: string;
  age: number;
  nationality: string;
  friends?: Friend[];  
};

type Movie = {
  id: number;
  name: string;
  year: number;
};

export const UserList: User[] = [
  {
    id: 1,
    name: "John Doe",
    age: 22,
    nationality: "USA",
    friends: [
      { id: 2, name: "Jane Doe", age: 44, nationality: "UAE" },
      { id: 3, name: "John Smith", age: 27, nationality: "UK" },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 23,
    nationality: "UAE",
    friends: [
      { id: 1, name: "John Doe", age: 64, nationality: "USA" },
      { id: 3, name: "John Smith", age: 21, nationality: "UK" },
    ],
  },
  { id: 3, name: "John Smith", age: 24, nationality: "UK" },
  { id: 4, name: "Jane Smith", age: 25, nationality: "SL" },
];

export const MoviesList: Movie[] = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    year: 1994,
  },
  {
    id: 2,
    name: "The Godfather",
    year: 1972,
  },
  {
    id: 3,
    name: "The Dark Knight",
    year: 2008,
  },
];