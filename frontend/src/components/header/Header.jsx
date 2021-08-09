import React from 'react'

import { Box, Button } from '@material-ui/core'

import { signOut } from '../../utils/auth'
import { useAuth } from 'reactfire';


export default function Header() {
  const auth = useAuth()

  return (
    <Box width="100%" display="flex" justifyContent="flex-end">
      <Button onClick={() => signOut(auth)}>Sign Out</Button>
    </Box>
  )
}
