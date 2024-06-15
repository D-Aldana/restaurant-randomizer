## Yelp route

```https://api.yelp.com/v3/businesses/search```

## API Route

`api/restaurants/` - Returns a JSON of businesses 

### Parameters
- `categories` [array of string, optional] : cuisine i.e. Chinese, Indian, etc...
- `radius` [number, optional] : search radius in meters (max value is 40,000 meters)
- `location` [string, optional]: geographic area to be used when searching (required if either latitude or longitude is not provided) e.g. "New York City", "NYC", "350 5th Ave, New York, NY 10118"
- `latitude` [number, optional]: (required if location is not provided)
- `longitude` [number, optional]: (required if location is not provided)
- `price` [array of integers, optional] : Pricing levels to filter the search result with: 1 = `$`, 2 = `$$`, 3 = `$$$`, 4 = `$$$$`. e.g., "1, 2, 3" will filter the results to show the ones that are `$`, `$$`, or `$$$`.
- `open_now` [boolean, optional] : When set to true, only return the businesses that are open now
- `limit` [integer, optional]: number of results to return (default 20, max 50)
  
### JSON Response
```
{
  'businesses': [
    'name': [string],
    'distance: [number],
    'location': [JSON],
    'categories': [JSON],
    'business_hours: [JSON],
    'price': [integer],
    'yelp_url: [string],
    'rating': [integer],
    'phone': [string],
    'image_url': [string]
    ],
  'total': [integer]
} 
```

### Status Codes
```
200 OK
```
```
400 Bad Request: Location or latitude/longitude required
```
```
500 Internal Server Error: Error fetching data from Yelp API
```
