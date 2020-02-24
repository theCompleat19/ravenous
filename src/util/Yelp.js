const apiKey = 'kfQSkURYcUkSBRDl8YDWeAiU7_LFnzZoXyJvDYjl7v-K684v6-uLtlXbLgnkG1pR3eM92MLZzFom8NjZJOkr4_rZKz9IV5q6AIgDCQouOkbu3BKMQM5_vjRhlX3eXXYx';
export const Yelp = {



    searchYelp(term, location, sortBy) {

    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {
        Authorization: `Bearer ${apiKey}`
    }}).then((response) => response.json().then(jsonResponse => {
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.address,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                };
            });
        }
    }));
} 

};

export default Yelp;