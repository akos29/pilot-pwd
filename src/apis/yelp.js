import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Nx9DUmTtLTJHVFhgrdLSisPdTjLCHxbdst8IoVvNoFjCNcxNhi_iX88HjyGe40xdAynM3lBFcziVTC1PuloX34Iw4wfgfZPUMhqC73EJW6Mm6Fe7vG0Rqvf4ktuqY3Yx',
  },
});
