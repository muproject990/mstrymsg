import { resend } from '@/lib/resend';
import VerificationEmail from '../../emails/VerificationEmail';
import { ApiResponse } from '../../types/ApiResponse';


export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>
{
    try {
const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Mstry MSg : Verification Code',
    react: VerificationEmail({username,otp:verifyCode}),
  });

        return {success:false,message:' sended  verification email'}

    } catch (emailErr) {
        console.error("Error sending verification",emailErr);
        return {success:false,message:'Failed to send verification email'}
        
    }
    
}