import { useState } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// import Label from 'src/components/label';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CategoryTable({
  selected,
  name,
  imageTag,
  handleClick,
  onDelete,
  categoryID
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* <Avatar alt={name} src={avatarUrl} /> */}
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>
          <img src={imageTag} alt="" width={100} />
        </TableCell>
        <TableCell />
        <TableCell />
        <TableCell />
        {/* 
        <TableCell>{role}</TableCell>

        <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell>

        <TableCell>
          <Label color={(status === 'banned' && 'error') || 'success'}>{status}</Label>
        </TableCell> */}

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
        <Link to={`/edit-category/${categoryID}`} style={{ textDecoration: 'none' }}>
            <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
            Edit
          </Link>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleCloseMenu();
            onDelete();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

CategoryTable.propTypes = {
  // avatarUrl: PropTypes.any,
  // company: PropTypes.any,
  handleClick: PropTypes.func,
  onDelete: PropTypes.func,
  // isVerified: PropTypes.any,
  name: PropTypes.any,
  imageTag: PropTypes.any,
  // role: PropTypes.any,
  selected: PropTypes.any,
  categoryID: PropTypes.string,
};
