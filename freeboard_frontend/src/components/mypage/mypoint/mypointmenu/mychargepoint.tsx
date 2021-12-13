import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($page: Int) {
    fetchPointTransactionsOfLoading(page: $page) {
      _id
      impUid
      balance
      createdAt
      amount
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 34px;
`;
const RowName = styled.div`
  height: 67px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;
const ColumnName = styled.div`
  width: 25%;
  text-align: center;
  font-family: myfont;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
const Row = styled.div`
  height: 67px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

const Column = styled.div`
  width: 25%;

  font-family: myfont;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
`;

const ColumnAmount = styled.div`
  width: 25%;
  text-align: center;
  font-family: myfont;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  color: #ff1493;
`;

const ColumnBalance = styled.div`
  width: 25%;

  font-family: myfont;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
`;
export default function MyChargePointPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING, {
    variables: { page: 1 },
  });
  return (
    <>
      <Wrapper>
        <RowName>
          <ColumnName>충전일</ColumnName>
          <ColumnName>결제 ID</ColumnName>
          <ColumnName>충전 내역</ColumnName>
          <ColumnName>충전 후 잔액</ColumnName>
        </RowName>
        {data?.fetchPointTransactionsOfLoading.map((el: any) => (
          <Row key={el._id}>
            <Column>{el.createdAt.slice(0, 10)}</Column>
            <Column>{el.impUid}</Column>
            <ColumnAmount>+ {el.amount.toLocaleString("ko-KR")}</ColumnAmount>
            <ColumnBalance>
              ￦ {el.balance.toLocaleString("ko-KR")}
            </ColumnBalance>
          </Row>
        ))}
      </Wrapper>
    </>
  );
}
