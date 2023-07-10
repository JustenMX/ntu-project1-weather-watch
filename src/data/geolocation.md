// state management
const [userGeoLocation, setUserGeoLocation] = useState({});

// Get users current geolocation
const fetchUsersLocation = async () => {
navigator.geolocation.getCurrentPosition((position) => {
setUserGeoLocation((prevState) => ({
...prevState,
latitude: position.coords.latitude,
longitude: position.coords.longitude,
}));
});
};
console.log(userGeoLocation);

// Get users current geolocation upon load
useEffect(() => {
fetchUsersLocation();
}, []);
