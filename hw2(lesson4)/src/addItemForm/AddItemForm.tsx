import React from "react";

interface AddItemProps {
    onAdd: (text: string) => void
}

interface AddItemState {
    label: string
}

class AddItemForm extends React.Component<AddItemProps, AddItemState>{
    constructor(props: AddItemProps) {
        super(props);
    }

    onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e: Event) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ""
        });
    };
    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={() => this.onSubmit}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Введите дело"
                    onChange={() => this.onLabelChange}
                    value={this.state.label}
                />
                <button className="btn btn-outline-secondary">Add Item</button>
            </form>
        );
    }
}

export default AddItemForm