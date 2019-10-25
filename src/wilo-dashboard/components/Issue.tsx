import React, { FC } from "react";
import styled from "styled-components";
import { get } from "lodash";
import { colorGrayLight } from "wilo-design";
import { lighten } from "polished";
import { JiraIssue } from "wilo-api/types";

interface Props {
  data: JiraIssue;
}

export const Issue: FC<Props> = function({ data }) {
  const iconUrl = data.fields.issuetype.iconUrl;
  const title = data.fields.summary;
  const key = data.key;
  const assigneeIconUrl = get(data, 'fields.assignee.avatarUrls["32x32"]');
  return (
    <Root>
      <Title>{title}</Title>
      <Footer>
        <FooterLeft>
          <TypeIcon src={iconUrl} />
          <Key>{key}</Key>
        </FooterLeft>
        {assigneeIconUrl && <AssigneeIcon src={assigneeIconUrl} />}
      </Footer>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  cursor: pointer;
  padding: 16px 12px;
  border-bottom: 1px solid ${lighten(0.2, colorGrayLight)};

  &:hover {
    background-color: ${lighten(0.3, colorGrayLight)};
  }
`;

const Title = styled.summary``;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FooterLeft = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TypeIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 6px;
`;

const Key = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #5e6c84;
`;

const AssigneeIcon = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  margin-left: 4px;
`;
