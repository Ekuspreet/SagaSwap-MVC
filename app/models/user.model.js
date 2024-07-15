let Users = [
    {
        id: "38447274",
        name: "Ekuspreet Singh"
    },
    {
        id: "38447275",
        name: "Mandeep Saini"
    },
    {
        id: "38447276",
        name: "Simarpreet Kaur"
    },
    {
        id: "38447277",
        name: "John Doe"
    },
    {
        id: "38447282",
        name: "Jane Smith"
    },
    {
        id: "38447283",
        name: "Alice Johnson"
    },
    {
        id: "38447278",
        name: "Bob Williams"
    },
    {
        id: "38447279",
        name: "Emma Davis"
    },
    {
        id: "38447280",
        name: "Michael Brown"
    },
    {
        id: "38447284",
        name: "Ekuspreet Singh"
    }
];

function getUserById(user_id) {
    return Users.find(user => user.id == user_id);
}

module.exports = {getUserById};
