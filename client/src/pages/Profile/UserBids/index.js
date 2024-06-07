
import { Modal, message, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBids } from "../../../apicalls/products";
import { SetLoader } from "../../../redux/loadersSlice";
import moment from "moment";


function Bids() {
  const [bidsData, setBidsData] = React.useState([]);
  const dispatch = useDispatch();
  const {user}= useSelector((state)=> state.users);
  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetAllBids({
        buyer : user._id,
        //product: selectedProduct._id,
      });
      dispatch(SetLoader(false));
      if (response.success) {
        setBidsData(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const columns = [
    {
        title: "Product",
        dataIndex: "Product",
        render: (text, record) => {
          return record.product.name;
        }
      },
    {
      title: "Bid Placed On",
      dataIndex: "createdAt",
      render: (text, record) => {
        return moment(text).format("DD-MM-YYYY hh:mm a");
      }
    },
    {
      title: "Seller Name",
      dataIndex: "seller",
      render: (text, record) => {
        return record.seller.name;
      },
    },
    {
        title: "Offered price",
        dataIndex: "offeredprice",
        render: (text, record) => {
          return record.product.price;
        },
      },
    {
      title: "Bid Amount",
      dataIndex: "bidAmount",
    },
    {
      title: "Message",
      dataIndex: "message",
    },
    
    {
      title: "Contact Details",
      dataIndex: "contactDetails",
      render: (text, record) => {
        return (
          <div>
            <p>Phone: {record.mobile}</p>
            <p>Email: {record.buyer.email}</p>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
      getData();
  }, []);

  return (
    // <Modal
    //   title=""
    //   open={showBidsModal}
    //   onCancel={() => setShowBidsModal(false)}
    //   centered
    //   width={1500}
    //   footer={null}
    // >
      <div className="flex gap-3 flex-col">
        {/* <h1 className=" text-primary">My Bids</h1> */}
       

        <Table columns={columns} dataSource={bidsData} />
      </div>
  //  </Modal>
  );
}

export default Bids;
