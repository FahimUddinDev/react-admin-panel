import {
  Box,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import Header from "../../component/Header";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";

const MakeAccordion = ({ question, details }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.monde);
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const Faq = () => {
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked question Page " />
      <MakeAccordion
        question="An Important Question"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            maiores esse veritatis facilis enim dolorum! Inventore quaerat
            aspernatur quia reprehenderit vel molestiae veniam accusantium earum
            itaque quisquam animi eveniet quod eligendi possimus, dicta sit
            fugiat expedita eaque ipsum! Illo minus tempore at culpa ab odit
            animi doloremque, dolor debitis, error facere veniam id incidunt
            nesciunt, est vitae dicta distinctio! Eum exercitationem eius
            delectus sint provident reiciendis recusandae vel ad iusto in
            cupiditate amet sapiente, velit odit hic eos placeat quam
            repudiandae accusantium, iure neque voluptatum voluptate? Nulla
            facere neque sunt, assumenda laborum possimus ratione deserunt ipsa
            labore nihil voluptates? Repellat."
      />
      <MakeAccordion
        question="Another Important Question"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            maiores esse veritatis facilis enim dolorum! Inventore quaerat
            aspernatur quia reprehenderit vel molestiae veniam accusantium earum
            itaque quisquam animi eveniet quod eligendi possimus, dicta sit
            fugiat expedita eaque ipsum! Illo minus tempore at culpa ab odit
            animi doloremque, dolor debitis, error facere veniam id incidunt
            nesciunt, est vitae dicta distinctio! Eum exercitationem eius
            delectus sint provident reiciendis recusandae vel ad iusto in
            cupiditate amet sapiente, velit odit hic eos placeat quam
            repudiandae accusantium, iure neque voluptatum voluptate? Nulla
            facere neque sunt, assumenda laborum possimus ratione deserunt ipsa
            labore nihil voluptates? Repellat."
      />
      <MakeAccordion
        question="Want to know about this"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          maiores esse veritatis facilis enim dolorum! Inventore quaerat
          aspernatur quia reprehenderit vel molestiae veniam accusantium earum
          itaque quisquam animi eveniet quod eligendi possimus, dicta sit
          fugiat expedita eaque ipsum! Illo minus tempore at culpa ab odit
          animi doloremque, dolor debitis, error facere veniam id incidunt
          nesciunt, est vitae dicta distinctio! Eum exercitationem eius
          delectus sint provident reiciendis recusandae vel ad iusto in
          cupiditate amet sapiente, velit odit hic eos placeat quam
          repudiandae accusantium, iure neque voluptatum voluptate? Nulla
          facere neque sunt, assumenda laborum possimus ratione deserunt ipsa
          labore nihil voluptates? Repellat."
      />
      <MakeAccordion
        question="Some Important Question"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        maiores esse veritatis facilis enim dolorum! Inventore quaerat
        aspernatur quia reprehenderit vel molestiae veniam accusantium earum
        itaque quisquam animi eveniet quod eligendi possimus, dicta sit
        fugiat expedita eaque ipsum! Illo minus tempore at culpa ab odit
        animi doloremque, dolor debitis, error facere veniam id incidunt
        nesciunt, est vitae dicta distinctio! Eum exercitationem eius
        delectus sint provident reiciendis recusandae vel ad iusto in
        cupiditate amet sapiente, velit odit hic eos placeat quam
        repudiandae accusantium, iure neque voluptatum voluptate? Nulla
        facere neque sunt, assumenda laborum possimus ratione deserunt ipsa
        labore nihil voluptates? Repellat."
      />
      <MakeAccordion
        question="What is Important Question"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
      maiores esse veritatis facilis enim dolorum! Inventore quaerat
      aspernatur quia reprehenderit vel molestiae veniam accusantium earum
      itaque quisquam animi eveniet quod eligendi possimus, dicta sit
      fugiat expedita eaque ipsum! Illo minus tempore at culpa ab odit
      animi doloremque, dolor debitis, error facere veniam id incidunt
      nesciunt, est vitae dicta distinctio! Eum exercitationem eius
      delectus sint provident reiciendis recusandae vel ad iusto in
      cupiditate amet sapiente, velit odit hic eos placeat quam
      repudiandae accusantium, iure neque voluptatum voluptate? Nulla
      facere neque sunt, assumenda laborum possimus ratione deserunt ipsa
      labore nihil voluptates? Repellat."
      />
      <MakeAccordion
        question="Final Important Question"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            maiores esse veritatis facilis enim dolorum! Inventore quaerat
            aspernatur quia reprehenderit vel molestiae veniam accusantium earum
            itaque quisquam animi eveniet quod eligendi possimus, dicta sit
            fugiat expedita eaque ipsum! Illo minus tempore at culpa ab odit
            animi doloremque, dolor debitis, error facere veniam id incidunt
            nesciunt, est vitae dicta distinctio! Eum exercitationem eius
            delectus sint provident reiciendis recusandae vel ad iusto in
            cupiditate amet sapiente, velit odit hic eos placeat quam
            repudiandae accusantium, iure neque voluptatum voluptate? Nulla
            facere neque sunt, assumenda laborum possimus ratione deserunt ipsa
            labore nihil voluptates? Repellat."
      />
    </Box>
  );
};

export default Faq;
