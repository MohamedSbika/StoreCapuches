import React, { useEffect, useState } from 'react';
import { Avatar, IconButton, List, ListItem, Stack, Tooltip, Typography, CircularProgress } from '@mui/material';
import IconifyIcon from './IconifyIcon';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:4000/abdellino/users/`);
        const json = await res.json();

        if (json.success === false) {
          toast.error(json.message || 'Failed to fetch users', {
            autoClose: 2000,
          });
        } else {
          // Filter users by role 'user' and sort by creation date
          const filteredUsers = json
            .filter(user => user.role === 'user')
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by createdAt date
            .slice(0, 4); // Get the last 3 users
          setUsers(filteredUsers);
        }
      } catch (error) {
        toast.error(error.message || 'Error fetching users', {
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserDelete = async (userId) => {
    if (!userId) {
      console.error('User ID is undefined');
      return;
    }

    try {
      const res = await fetch(`http://localhost:4000/abdellino/users/delete/${userId}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (data.success === false) {
        toast.error(data.message || 'Failed to delete user', {
          autoClose: 2000,
        });
      } else {
        setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
        toast.success('User deleted successfully', {
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.message || 'Error deleting user', {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className='bg-white rounded-xl shadow-md shadow-gray-400'>
      <h3 className='text-center font-semibold text-xl text-teal-600'>Derniers Comptes ajoutées</h3>
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {users.map((user) => (
            <ListItem
              key={user._id}
              sx={(theme) => ({
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: theme.spacing(1.25, 2.5),
              })}
            >
              <Stack direction="row" gap={1.5}>
                <Tooltip title={user.username} placement="top" arrow enterDelay={0} leaveDelay={0}>
                  <Avatar src={user.avatar} />
                </Tooltip>
                <Stack component="div">
                  <Typography variant="body1" color="text.primary">
                    {user.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </Stack>
              </Stack>
              <IconButton onClick={() => handleUserDelete(user._id)}>
                <IconifyIcon icon="mingcute:delete-fill" color="error.main" width={16} height={16} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
      <ToastContainer />
    </div>
  );
};

export default UserList;
