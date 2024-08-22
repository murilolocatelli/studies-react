import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';
import { stringify } from 'postcss';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const JobListings = ({ isHome = false }) => {
  // Example using React query
  const queryClient = useQueryClient();
  
  const {data: jobs, isLoading, error } = useQuery({
    // it is possible to use params. e.g.:
    //queryKey: ["todos", { search }],
    queryKey: ['jobs'],
    queryFn: async () => {
      const apiUrl = isHome
        ? '/api/jobs?_limit=3'
        : '/api/jobs';

      console.log(apiUrl);

      const res = await fetch(apiUrl);
      const data = await res.json();

      return data;
    },
    refetchInterval: 60000,

    // it is possible to configure other properties. e.g.:
    //staleTime: Infinity,
    //cacheTime: 0,
  });

  // It is possible to invalidate cache. e.g.:

  //const { mutateAsync: addTodoMutation } = useMutation({
  //  mutationFn: addTodo,
  //  onSuccess: () => {
  //    queryClient.invalidateQueries({ queryKey: ["todos"] });
  //  },
  //});

  // End example using React Query

  /*const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      // /api mapped in proxy config in vite.config.js
      const apiUrl = isHome
        ? '/api/jobs?_limit=3'
        : '/api/jobs';

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);*/

  return (
    <>
      {/* <!-- Browse Jobs --> */}
      <section className='bg-blue-50 px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
            { isHome ? 'Recent Jobs' : 'Browse Jobs' }
          </h2>
          {isLoading
            ? (
              <Spinner loading={isLoading} />
            )
            : (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                  error
                    ? 'Error' + error.message
                    : jobs.map((job) => (
                      <JobListing key={job.id} job={job} />
                    ))
                }
              </div>
            )
          }
        </div>
      </section>
    </>
  )
};

export default JobListings;