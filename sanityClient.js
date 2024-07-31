import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: "d6s5fbr2",
    apiVersion: "v2022-03-07",
    token: 'skE3ixkxYcn71AcyauqBKbesR7JElT6PvxENfEAunyHvwVki2xL5fTQZyrJKtb38UtuTzObrlGMYFH2w4SnYlA9Bmxh1XDltq6AanXqfZ8gfvjstrLXXmUfzUB2e3YFCXOXZhVIxQqFaLhm3G5Uh5TsuPaqrsftaR1ehexrCMx6XUe6Qcm2K', // replace with your API token
    dataset: 'production',
    useCdn: false, // optional, but recommended for production,
  });
  
  export default client;