import React, { useState } from "react";
import Container from "../components/Container";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TextAvatar from "../components/TextAvatar";

import {
  Button,
  Stack,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const staticComments = [
  {
    userName: "Truong",
    Avatar: "none",
    Content: "Phim hay qua",
    CreateAt: "2024-12-07",
  },
  {
    userName: "Dat",
    Avatar: "none",
    Content: "Phim hay qua hay qua",
    CreateAt: "2024-12-07",
  },
  {
    userName: "Truong",
    Avatar: "none",
    Content: "Phim hay qua du vay chen",
    CreateAt: "2024-12-07",
  },
  {
    userName: "Nam",
    Avatar: "none",
    Content: "Phim hay qua",
    CreateAt: "2024-12-07",
  },
  {
    userName: "Son",
    Avatar: "none",
    Content: "Phim hay qua hay qua",
    CreateAt: "2024-12-07",
  },
  {
    userName: "Truong",
    Avatar: "none",
    Content: "Phim hay qua du vay chen",
    CreateAt: "2024-12-07",
  },
  {
    userName: "Son",
    Avatar: "none",
    Content: "Phim hay qua hay qua",
    CreateAt: "2024-12-07",
  },
  {
    userName: "Truong",
    Avatar: "none",
    Content: "Phim hay qua du vay chen",
    CreateAt: "2024-12-07",
  },
];

function MovieComment() {
  const [visibleComments, setVisibleComments] = useState(3);

  const loadMoreComments = () => {
    setVisibleComments(visibleComments + 3);
  };

  const renderAvatar = (text) => (
    <ListItemAvatar>
      <TextAvatar text={text} />
    </ListItemAvatar>
  );

  const renderComment = (comment) => {
    return (
      <ListItem
        alignItems="flex-start"
        key={comment.userName + comment.CreateAt}
        className="hover:bg-blue-700"
      >
        {renderAvatar(comment.userName.charAt(0))}
        <ListItemText>
          <Typography variant="h6" fontWeight="700">
            {comment.userName}
          </Typography>
          <Typography fontSize={12}>{comment.CreateAt}</Typography>
          <Typography variant="h6">{comment.Content}</Typography>
        </ListItemText>
      </ListItem>
    );
  };

  return (
    <>
      <Container header={`Bình luận phim (${staticComments.length})`}>
        <List sx={{ width: "100%", bgcolor: "black" }}>
          {staticComments
            .slice(0, visibleComments)
            .map((comment) => renderComment(comment))}
        </List>
        {visibleComments < staticComments.length && (
          <Button onClick={loadMoreComments}>Xem thêm</Button>
        )}
        <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
          {/* cho ten usẻ vao */}
          <TextAvatar text={"Truong"} />
          <Stack spacing={2} flexGrow={1}>
            <Typography variant="h6" fontWeight="700">
              {"Truong"}
            </Typography>
            <TextField
              // value={content}
              // onChange={(e) => setContent(e.target.value)}
              multiline
              rows={4}
              placeholder="Viết bình luận của bạn"
              variant="outlined"
              fullWidth
              sx={{ border: "1px solid blue" }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{ width: "max-content" }}
              startIcon={<SendOutlinedIcon />}
              // loading={onRequest}
              // onClick={onAddReview}
            >
              Đăng
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default MovieComment;
