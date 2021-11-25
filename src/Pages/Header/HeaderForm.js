import { Button, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { v4 as uuid } from "uuid";
// import "./Header.modules.csss";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  addmoreLinks,
  changeData,
  createInitialLink,
  updateLinks,
  deleteLink,
} from "../../Features/HeaderSlice";

import { getHeaderState } from "../../Features/HeaderSlice";
const HeaderForm = ({ headerRef }) => {
  const { headerBackground, color, headerTitle, links } =
    useSelector(getHeaderState);

  let limit = 4;

  const save = () => {
    headerRef.current = document.querySelector(".header_wrapper");
    console.log(headerRef);
  };

  const dispatch = useDispatch();

  const dataHandeler = (e) => {
    dispatch(
      changeData({
        [e.target.name]: e.target.value,
      })
    );
  };

  const linksHandler = (e, el) => {
    if (links.length === 0) {
      dispatch(
        createInitialLink({
          id: uuid(),
          linkUrl: e.target.name === "linkUrl" ? e.target.value : "#",
          linkTitle: e.target.name === "linkTitle" ? e.target.value : "demo",
        })
      );
    } else {
      dispatch(
        updateLinks({
          id: el.id,
          linkUrl: e.target.name === "linkUrl" ? e.target.value : el.linkUrl,
          linkTitle:
            e.target.name === "linkTitle" ? e.target.value : el.linkTitle,
        })
      );
    }
  };

  return (
    <Box sx={{ height: "90vh", overflow: "auto", background: "#fff" }}>
      <h1>Header customization</h1>
      <form style={{ padding: "0 1rem" }}>
        <div className="formel_wrapper">
          <label htmlFor="bgheadColor">Background Color</label>
          <input
            onChange={(e) => dataHandeler(e)}
            name="headerBackground"
            id="bgheadColor"
            type="color"
            value={headerBackground}
          />
        </div>

        <div className="formel_wrapper">
          <label htmlFor="el_color">Text Color</label>
          <input
            onChange={(e) => dataHandeler(e)}
            name="color"
            id="el_color"
            type="color"
            value={color}
          />
        </div>

        <TextField
          onChange={(e) => dataHandeler(e)}
          name="logoImg"
          fullWidth
          label="LogoImg"
          margin="dense"
        />
        <TextField
          onChange={(e) => dataHandeler(e)}
          name="headerTitle"
          fullWidth
          label="Header Title"
          margin="dense"
          value={headerTitle}
        />

        <Box>
          {links.length ? (
            links.map((el, i) => {
              return (
                <Fragment key={el.id}>
                  <TextField
                    onChange={(e) => linksHandler(e, el)}
                    name="linkTitle"
                    label={`Link Title ${i + 1}`}
                    value={el.linkTitle}
                    fullWidth
                    margin="dense"
                  />
                  <TextField
                    onChange={(e) => linksHandler(e, el)}
                    name="linkUrl"
                    label={`Link Url ${i + 1}`}
                    fullWidth
                    value={el.linkUrl}
                    margin="dense"
                  />
                  <IconButton
                    onClick={() => {
                      dispatch(deleteLink(el.id));
                    }}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Fragment>
              );
            })
          ) : (
            <>
              <TextField
                name="linkTitle"
                label="Link Title 1"
                fullWidth
                margin="dense"
                onChange={(e) => linksHandler(e)}
              />
              <TextField
                name="linkUrl"
                label="Link URL 1"
                fullWidth
                margin="dense"
                onChange={(e) => linksHandler(e)}
              />
            </>
          )}
          <div>
            <Button
              onClick={() => {
                dispatch(addmoreLinks());
              }}
              disabled={!links.length || links.length === limit}
            >
              Add More Links
            </Button>
            <Button
              onClick={() => {
                save();
              }}
            >
              Save
            </Button>
          </div>
        </Box>
      </form>
    </Box>
  );
};

export default HeaderForm;
