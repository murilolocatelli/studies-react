import { useSignIn } from 'react-auth-kit';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const signIn = useSignIn();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      /*const response = await axios.post(
        'http://localhost:9000/api/v1/login',
        values
      );*/

      if (!email || !password || password === '123') {
        setError('Invalid email or password');
      } else {
        signIn({
          token: 'fakeToken',
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: { email },
        });
      }
    } catch (err) {
      /*if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);*/

      console.log('Error: ', err);
    }
  };

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m0'>
          <form onSubmit={onSubmit}>
            <h2 className='text-3xl text-center font-semibold mb-6'>
              Welcome Back!
            </h2>
            <p></p>
            <div className='font-semibold mb-6 text-red-500'>{error}</div>
            <div className='mb-4'>
              <input
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                className='border rounded w-full py-2 px-3 mb-2'
                type='email'
              />
            </div>
            <div className='mb-4'>
              <input
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className='border rounded w-full py-2 px-3 mb-2'
                type='password'
              />
            </div>
            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
