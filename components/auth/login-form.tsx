'use client'
import{ useTransition } from 'react'
import { CardWrapper } from './card-wrapper'
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/lib/zod/shcemas/login-schema'
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
export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const submit = (data: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(data)
    })
  }

  return (
        <div>
        <CardWrapper headerLabel="Login with credentials. " backButtonLabel="Don't have an account" 
        backButtonHref="/auth/sign-up" showSocial>
         <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
 
        <div className="space-y-6">
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

