"use client";

import {CirclePlus} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import {ListBox, Select} from "@heroui/react";

export function AddTask({createATask}) {
  return (
    <Modal>
      <Button variant="secondary">Add a Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus         className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add a Task</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>title</Label>
                    <Input placeholder="Enter your title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Task Description</Label>
                    <Input placeholder="Enter your Task Description" />
                  </TextField>
         <Select name="priority" className="w-full" placeholder="Select one">
      <Label>Priority</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="low" textValue="low">
            Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="medium" textValue="medium">
           Medium
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="high" textValue="high">
            High 
            <ListBox.ItemIndicator />
          </ListBox.Item>
                
         
        
        </ListBox>
      </Select.Popover>
    </Select>



           <Select name="status" className="w-full" placeholder="Select one">
      <Label>Status</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="pending" textValue="pending">
            pending
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="in-progress" textValue="in-progress">
           In-progress
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="completed" textValue="completed">
           Completed
            <ListBox.ItemIndicator />
          </ListBox.Item>
                
         
        
        </ListBox>
      </Select.Popover>
    </Select>
                 
                  <TextField className="w-full" name="message">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>

                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="Submit">Submit Task</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}