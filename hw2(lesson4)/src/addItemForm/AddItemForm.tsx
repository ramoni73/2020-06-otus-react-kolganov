import React from "react";

interface AddItemProps {
  onAdd: (text: string) => void;
}

interface AddItemState {
  label: string;
}

class AddItemForm extends React.Component<AddItemProps, AddItemState> {
  constructor(props: AddItemProps) {
    super(props);
    this.state = {
      label: "",
    };

    this.onLabelChange = this.onLabelChange.bind(this);
  }

  onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Введите дело"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default AddItemForm;
