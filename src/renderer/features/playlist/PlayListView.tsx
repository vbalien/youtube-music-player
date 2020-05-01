import React from "react";
import { Theme } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import PlayListItemMenu from "./PlayListItemMenu";
import { useMediaQuery, makeStyles } from "@material-ui/core";
import { YoutubeVideo } from "../../api/youtubeApi";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "absolute",
    top: 64,
    bottom: 80,
    paddingLeft: 240,
    left: 0,
    right: 0,
    overflow: "scroll",
  },
  gridList: {
    padding: theme.spacing(3),
    margin: "0 !important",
  },
  tile: {
    margin: 10,
  },
}));

interface PlayListViewProps {
  items: YoutubeVideo[];
}

export default function PlayListView({
  items,
}: PlayListViewProps): JSX.Element {
  const classes = useStyles();
  const xl = useMediaQuery<Theme>((theme) => theme.breakpoints.up("xl"));
  const lg = useMediaQuery<Theme>((theme) => theme.breakpoints.up("lg"));
  const md = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));
  const sm = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
  const getGridListCols = (): number => {
    if (xl) return 5;
    if (lg) return 4;
    if (md) return 3;
    if (sm) return 2;
    return 1;
  };

  return (
    <div className={classes.container}>
      <GridList
        className={classes.gridList}
        cellHeight={200}
        cols={getGridListCols()}
      >
        {items.map((item, idx) => (
          <GridListTile className={classes.tile} key={idx}>
            <img src={item.thumbnail} alt={item.title} />
            <GridListTileBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={<PlayListItemMenu />}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
