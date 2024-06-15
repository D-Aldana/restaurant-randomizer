## Yelp parameters

- `categories` [string] : cuisine i.e. Chinese, Indian, etc...
- `radius` [number] : search radius in meters (max value is 40,000 meters)
- `location` [string]: geographic area to be used when searching (required if either latitude or longitude is not provided) e.g. "New York City", "NYC", "350 5th Ave, New York, NY 10118"
- `latitude` [number]
- `longitude` [number]
- `price` [array of integers] : Pricing levels to filter the search result with: 1 = $, 2 = $$, 3 = $$$, 4 = $$$$. e.g., "1, 2, 3" will filter the results to show the ones that are $, $$, or $$$.
- `open_now` [boolean] : When set to true, only return the businesses that are open now
- `limit` [integer]: number of results to return (default 20, max 50)

## API Route

`api/restaurants/` - Returns a JSON of businesses 

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
