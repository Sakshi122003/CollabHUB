import React, { useState, useEffect, useRef } from "react";
import { Typography, Box, Grid } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";

const colors = [
  "#FF9800",
  "#E91E63",
  "#2196F3",
  "#4CAF50",
  "#9C27B0",
  "#00BCD4",
];

const TimelineItem = ({ date, title, description, index, isHighlighted }) => (
  <Grid container spacing={2} sx={{ mb: 4 }}>
    <Grid item xs={5} sx={{ textAlign: index % 2 === 0 ? "right" : "left" }}>
      {index % 2 === 0 && (
        <Box
          sx={{
            p: 2,
            transition: "background-color 0.3s",
            backgroundColor: isHighlighted ? "#CAF4FF" : "transparent",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: colors[index % colors.length], fontSize: 25 }}
          >
            {date}
          </Typography>
          <Typography variant="h5" sx={{ color: "#180161", mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#433D8B", fontSize: 20 }}>
            {description}
          </Typography>
        </Box>
      )}
    </Grid>
    <Grid
      item
      xs={2}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TimelineIcon
        sx={{ color: colors[index % colors.length], fontSize: 40 }}
      />
      {index !== 5 && (
        <Box
          sx={{
            width: 2,
            flexGrow: 1,
            bgcolor: colors[index % colors.length],
            my: 1,
          }}
        />
      )}
    </Grid>
    <Grid item xs={5} sx={{ textAlign: index % 2 !== 0 ? "left" : "right" }}>
      {index % 2 !== 0 && (
        <Box
          sx={{
            p: 2,
            transition: "background-color 0.3s",
            backgroundColor: isHighlighted ? "#CAF4FF" : "transparent",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: colors[index % colors.length], fontSize: 25 }}
          >
            {date}
          </Typography>
          <Typography variant="h5" sx={{ color: "#180161", mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#433D8B", fontSize: 20 }}>
            {description}
          </Typography>
        </Box>
      )}
    </Grid>
  </Grid>
);

const Timeline = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  const milestones = [
    {
      date: "Q4 2024",
      title: "Official Launch",
      description: "Full public release of the entertainment booking platform.",
    },
    {
      date: "Q3 2024",
      title: "Beta Launch",
      description:
        "Limited release to gather user feedback and make final adjustments.",
    },
    {
      date: "Q2 2024",
      title: "Integration and Testing",
      description:
        "Integration of all components and comprehensive testing of the platform.",
    },
    {
      date: "Q1 2024",
      title: "Frontend Development",
      description:
        "Creation of the user interface for all three panels using React.js.",
    },
    {
      date: "Q4 2023",
      title: "Backend Development",
      description:
        "Development of the core backend infrastructure using Node.js and MongoDB.",
    },
    {
      date: "Q3 2023",
      title: "Project Kickoff",
      description:
        "Initial planning and team formation for the entertainment booking platform.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setInterval(() => {
        setHighlightedIndex((prevIndex) =>
          prevIndex === milestones.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => clearInterval(timer);
  }, [isVisible, milestones.length]);

  return (
    <Box ref={timelineRef} sx={{ maxWidth: 800, margin: "auto", pt: 4 }}>
      {milestones.map((milestone, index) => (
        <TimelineItem
          key={index}
          {...milestone}
          index={index}
          isHighlighted={isVisible && index === highlightedIndex}
        />
      ))}
    </Box>
  );
};

export default Timeline;
