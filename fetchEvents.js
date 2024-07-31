import client from "./sanityClient";

const fetchEvents = async () => {
    const query = `*[_type == 'announcement']`;
    const params = { // optional, for filtering, sorting, etc.
        // add your parameters here
        
      };
      try {
        const data = await client.fetch(query, params);
        console.log('fetchedData is', data);
      return data
      }
      catch(error){
        console.log('hello this is fetching error',error);
      }
      
}


export default fetchEvents