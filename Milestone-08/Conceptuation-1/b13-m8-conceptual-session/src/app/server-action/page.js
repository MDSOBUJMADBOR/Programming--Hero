import { handlePostAction } from "@/actions/postAction";
import { addPost, getPosts } from "@/database/postdb";

import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";


const ServerActionPage = () => {
  const posts = getPosts();



  return (
    <div>
      <Form action={handlePostAction} className="w-full max-w-96 mx-auto border rounded-lg p-3 my-10">
        <Fieldset>
          <Fieldset.Legend>Add post</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <FieldGroup>
            <TextField isRequired name="title">
              <Label>Title</Label>
              <Input placeholder="Title" />
              <FieldError />
            </TextField>
            <TextField isRequired name="desc" type="text">
              <Label>Description</Label>
              <Input placeholder="Description" />
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              <FloppyDisk />
              Save changes
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>

      <div className="grid-cols-3 grid p-10 gap-5">
        {posts.map((post) => (
          <div className="border p-3 rounded-lg" key={post.id}>
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerActionPage;
