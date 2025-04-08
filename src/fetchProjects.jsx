import { createClient } from 'contentful';
import { useEffect } from 'react';
import { useState } from 'react';

const client = createClient({
  space: 'z0yfkrri5d5c',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'playground',
      });

      const items = response.items.map((item) => ({
        id: item.sys.id,
        title: item.fields.title,
        url: item.fields.url,
        img: item.fields.image?.fields?.file?.url,
      }));

      setProjects(items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};

export default useFetchProjects;
