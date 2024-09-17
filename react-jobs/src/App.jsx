import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import Login from './components/Login';
import { RequireAuth } from 'react-auth-kit';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path='/jobs'
          element={
            <RequireAuth loginPath='/login'>
              <JobsPage />
            </RequireAuth>
          }
        />
        <Route
          path='/add-job'
          element={
            <RequireAuth loginPath='/login'>
              <AddJobPage addJobSubmit={addJob} />
            </RequireAuth>
          }
        />
        <Route
          path='/edit-job/:id'
          element={
            <RequireAuth loginPath='/login'>
              <EditJobPage updateJobSubmit={updateJob} />
            </RequireAuth>
          }
          loader={jobLoader}
        />
        <Route
          path='/jobs/:id'
          element={
            <RequireAuth loginPath='/login'>
              <JobPage deleteJob={deleteJob} />
            </RequireAuth>
          }
          loader={jobLoader}
        />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
