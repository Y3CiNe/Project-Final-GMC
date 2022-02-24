import mongoose from 'mongoose';
const { model, Schema } = mongoose;

//difine schema
const eventSchema = Schema(
  {
    redirectUrl: { type: String },
    image: { type: Buffer },
  },
  {
    timestamps: true,
  }
);

const Event = model('Event', eventSchema);

export default Event;
