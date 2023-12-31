import { StyledBtn, Text, Title } from 'components/UserList/UserStyled';

const User = ({ user, handleDelete, handleJobstatus, openDetails }) => {
  return (
    <li>
      <Title>{user.name}</Title>
      <Text hasJob={user.hasJob}>Job: {String(user.hasJob)}</Text>
      <StyledBtn onClick={() => handleDelete(user.id)}>Delete</StyledBtn>
      <StyledBtn onClick={() => handleJobstatus(user.id)}>
        Change Job Status
      </StyledBtn>
      <StyledBtn onClick={() => openDetails(user)}>Details</StyledBtn>
    </li>
  );
};

export default User;
