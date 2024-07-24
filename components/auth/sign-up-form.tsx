'use client'
import{ useTransition } from 'react'
import { CardWrapper } from './card-wrapper'
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema } from '@/lib/zod/shcemas/sign-up-schema'
import { Loader2 } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '../form-success';
import { login } from '@/actions/login';
export const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const submit = (data: z.infer<typeof SignUpSchema>) => {
    startTransition(() => {
      login(data)
    })
  }

  return (
        <div>
        <CardWrapper headerLabel="Sign up with credentials." backButtonLabel="Already have an account" 
        backButtonHref="/auth/login" showSocial>
         <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
 
        <div className="space-y-2">
          <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@hotmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          ></FormField>
          <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="**********" {...field} type='password'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          ></FormField>
          <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="**********" {...field} type='password'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          ></FormField>
          <FormError/>
          <FormSuccess/>
          {
            isPending ? (
              <Button className='w-full' size='lg' variant='default' disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type='submit'
                      size='lg' 
                      variant='default' 
                      className="w-full">
                        Login
                </Button>
            )
          }
              
        </div>
          </form>
         </Form>
        </CardWrapper>


        </div>
  )
}

