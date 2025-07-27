
interface DateItem {
  id: number;
  name: string;
  email: string;
  role: string;
}

const data: DateItem[] = [
  { id: 1, name: 'Samiul', email: 'samiul@gmail.com', role: 'Frontend Developer' },
  { id: 2, name: 'Arafat', email: 'arafat@gmail.com', role: 'Backend Developer' },
  { id: 3, name: 'Sadia', email: 'sadia@gmail.com', role: 'UI/UX Designer' },
]
import {
  TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import Table from '@mui/material/Table';
const TableDefine = () => {
  const column = ["Id", "Name", "Email", "Role"]
  return (
    <div>
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              {
                column.map((col) => (
                  <TableCell key={col}>
                    {col}
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((item) => (
                <TableRow>
                  <TableCell>
                    {item.id}
                  </TableCell>
                  <TableCell>
                    {item.name}
                  </TableCell>
                  <TableCell>
                    {item.email}
                  </TableCell>
                  <TableCell>
                    {item.role}
                  </TableCell>
                </TableRow>

              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TableDefine
