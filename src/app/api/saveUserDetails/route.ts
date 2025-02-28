import { NextResponse } from 'next/server'
import User1 from '../../models/UserDetails';
import connectToDatabase from '../../lib/mongodb';


export async function POST(request: Request) {
    const { name, email, phone, address, pincode, quantity, shoptype, shopname, adharcard, pancard,  accountno, ifsc, holdername, message } = await request.json();

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    if (!name || !email || !phone || !address || !pincode || !quantity || !adharcard  || !shoptype || !shopname || !pancard || !accountno ||!ifsc ||!holdername ||!message) {
        return NextResponse.json({message: " All fields are required"}, {status:400})
    }

    if (!isValidEmail(email)) {
        return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }
    
    

    try {
      await connectToDatabase();
      console.log('Connected to the database');
  
      // Check if a user with the same email already exists
      const existingUser = await User1.findOne({ email });
  
      if (existingUser) {
          return NextResponse.json({ message: "User with this email already exists" }, { status: 400 });
      }
  
      const newUser1 = new User1({
          email,
          name,
          phone,
          address,
          pincode,
          quantity,
          shoptype,
          shopname,
          adharcard,
          pancard,
          accountno,
          ifsc,
          holdername,
          message,
      });
  
      await newUser1.save();
      return NextResponse.json({ message: "User Info created" }, { status: 201 });
  
  } catch (error) {
      console.error('Error while saving user details:', error);
      return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}  