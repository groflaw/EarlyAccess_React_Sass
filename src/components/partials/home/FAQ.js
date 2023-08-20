import { useState } from "react";
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    title: "How dows Crush Media work?",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum laboriosam quos aperiam. Distinctio quae dicta placeat unde dignissimos, iusto eos fuga officia minima eligendi facere, magni porro doloremque modi?",
  },
  {
    title: "What are the benefits of using Crush Media?",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum laboriosam quos aperiam. Distinctio quae dicta placeat unde dignissimos, iusto eos fuga officia minima eligendi facere, magni porro doloremque modi?",
  },
  {
    title: "What kind of influencers use Crush Media?",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum laboriosam quos aperiam. Distinctio quae dicta placeat unde dignissimos, iusto eos fuga officia minima eligendi facere, magni porro doloremque modi?",
  },
  {
    title: "How much does it cost to use Crush Media?",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum laboriosam quos aperiam. Distinctio quae dicta placeat unde dignissimos, iusto eos fuga officia minima eligendi facere, magni porro doloremque modi?",
  },
  {
    title: "How do I get on Crush Media?",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum laboriosam quos aperiam. Distinctio quae dicta placeat unde dignissimos, iusto eos fuga officia minima eligendi facere, magni porro doloremque modi?",
  },
];
const Acc = styled(Accordion)({
  border: "none",
  boxShadow: "none",
  marginBottom: "10px",
  transition: "0.3s",
  borderRadius: "10px",
  "&::before": {
    backgroundColor: "white",
  },
  "&:hover": {
    boxShadow: "0 0 2px #2e1c51",
  },
});
const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="col-12 faqs_header">FAQs</div>
      <div className="col-12 faqs_content">
        <Grid container spacing={2}>
          <Grid container justifyContent="center" sx={{ my: 3 }}>
            <Grid item xs={10}>
              {faqs.map((faq, i) => (
                <Acc
                  key={i}
                  expanded={expanded === `panel${i}`}
                  onChange={handleChange(`panel${i}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ flexShrink: 0, py: 0.5 }} variant="h6">
                      {faq.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.content}</Typography>
                  </AccordionDetails>
                </Acc>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FAQ;
