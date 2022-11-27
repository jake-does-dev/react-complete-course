import Card from '../ui/Card';

export interface UserProps {
  name: string;
  age: number;
}

const User = ({ age, name }: UserProps) => {
  return (
    <Card>
      <div>{name + ' (' + age + ' years old)'}</div>
    </Card>
  );
};

export default User;
