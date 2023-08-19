import { useState } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
 

const departmentsData = [
  {
    id: 1,
    name: "AgriCulture & Fishing (5)",
    subDepartments: [
      { id: 11, name: "Agriculture" },
      { id: 12, name: "Crops" },
      { id: 13, name: "Farming Animals &  Livestock" },
      { id: 14, name: "Fishery & Aquaculture" },
      { id: 15, name: "Ranching" },
    ],
  },
  {
    id: 2,
    name: "Business Services (5)",
    subDepartments: [
      { id: 21, name: "Accounting & Accounting Services" },
      { id: 22, name: "Auctions" },
      { id: 23, name: "Business Services-General" },
      { id: 24, name: "Call Centers & Business Centers" },
      { id: 25, name: "Career Planning" },
    ],
  },
];

const styles= {
  sidebar : {
   width : "25%",
   maxHeight : "70%",
  },
  sublists : {
    marginLeft : '20px'
  },
  heading: {
    color: "red"
  }
}

const Sidebar = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (departmentId: number) => {
    if (open === departmentId) {
      setOpen(null);
    } else {
      setOpen(departmentId);
    }
  };

  return (
    <List component="nav" sx={styles.sidebar}>
       <Typography variant="h6" sx={styles.heading}>
           {/* Filter Departments */}
        </Typography>
      {departmentsData.map((department) => (
        <div key={department.id}>
          <ListItem onClick={() => handleToggle(department.id)}>
            {" "}
            <ListItemIcon>
              <CheckBoxOutlineBlankIcon />
            </ListItemIcon>
            <ListItemText primary={department.name} />
            {open === department.id ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open === department.id} timeout="auto" unmountOnExit>
            <List component="div"  sx ={styles.sublists}>
              {department.subDepartments.map((subDept) => (
                <ListItem key={subDept.id}>
                  <ListItemIcon>
                    <CheckBoxOutlineBlankIcon />
                  </ListItemIcon>
                  <ListItemText primary={subDept.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default Sidebar;
