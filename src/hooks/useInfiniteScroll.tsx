import { api, pokemon } from '../api/network'
import { useState, useRef, useCallback, useEffect } from 'react';
// import { pokemon as typePokemon } from '../model/pokemon';
// import { getInstance, Network } from './useFetch';

// @FIXME

function useInfiniteScroll(initialData: any, searchedPokemon: string) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(initialData || null);
  const [page, setPage] = useState(0);
  const [empty, setEmpty] = useState(false);
  const loadMoreRef = useRef(null);
  const prevY = useRef(0);

  const handleObserver = useCallback((entries: any) => {
    const [target] = entries;
    if (target) {
      const scrollY = target.boundingClientRect.y;

      if (prevY.current > scrollY) {
        setPage((prev) => prev + 1);
      }

      prevY.current = scrollY
    }
  }, []);
  
  useEffect(() => {
    // if(!uri) return

    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  useEffect(() => {
    if(initialData) { 
      setItems(initialData)
    }
  }, [initialData]);

  const getItems = useCallback(async () => {
    if(initialData && page === 0) return
    try {
      const networkInstance = pokemon
      // const defaultParams = `items=10&page=${page}`;
      setLoading(true);

      // if(uri.includes('?')) {
      //   const [endpoint, query] = uri.split('?')
      //   const queryParams = query.concat('&', defaultParams)
      //   uri = endpoint.concat('?', queryParams)
      // } else {
      //   uri = uri.concat('?', defaultParams)
      // }

      // let [path, params] = uri.split("?");
      // let result = path + '?' + new URLSearchParams(Object.fromEntries(new URLSearchParams(params))).toString()
      let result = `/pokemon/${searchedPokemon}`

      const { data, status } = await networkInstance.get(result)
      if(status !== 200) setEmpty(true)
      items.length ? setItems((prev) => [...prev, data]) : setItems((prev) => [prev, data])
      
      setLoading(false);
    } catch (error) {
      console.error('ERROR IN GET INFINITE SCROLL ITEMS', error);
    }
  }, [page]);

  useEffect(() => {
    if(!empty) getItems()
  }, [getItems, empty]);

  return { loadMoreRef, loading, items };
}

export default useInfiniteScroll;
