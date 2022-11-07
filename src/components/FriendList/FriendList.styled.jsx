import styled from 'styled-components';


export const FriendListItem = styled.li`
    display: flex;
    align-items: center;
    padding: ${p => p.theme.space[4]}px;
    box-shadow: ${p => p.theme.shadows.normal};
    gap: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.normal};
    &:not(:first-child) {
        margin-top: ${p => p.theme.space[3]}px;
    }
`;

export const FriendIsOnline = styled.span`
    width: ${p => p.theme.space[4]}px;
    height: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.isOnline ? p.theme.colors.green : p.theme.colors.red};
`;

export const FriendAvatar = styled.img`
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.lightBlue};
`;

export const FriendName = styled.p`
    font-size: ${p => p.theme.fontSizes[3]}px;
`;
