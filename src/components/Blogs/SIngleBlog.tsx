"use client"
import Loader from '@/shared/Loader'
import { Button } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import { GoLink } from 'react-icons/go'
import { IoMdMail } from 'react-icons/io'
import { toast } from 'sonner'

interface ParamsProps {
    id: string
}

export const getSingleBlog = async (id: string) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/get-specific-blog/${id}`)
        return res.data
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}

export const parseContentWithLinks = (content: string, link: { key: string; url: string }[]) => {
    let parts: (string | JSX.Element)[] = [content];

    link.forEach(link => {
        parts = parts.flatMap(part =>
            typeof part === 'string'
                ? part.split(link?.key).flatMap((text, i, arr) =>
                    i < arr.length - 1 ? [text, <Link key={i} href={link.url} target="_blank" className="text-primary text-base underline underline-offset-2">{link.key}</Link>] : text
                )
                : part
        );
    });

    return parts;
};

interface BlogData {
    title?: string;
    description?: string;
    createdAt?: string;
    readTime?: string;
    blogImage?: string;
    links?: string | string[];
}

const SingleBlog: React.FC<ParamsProps> = ({ id }) => {
    const { data: singleBlog, isLoading } = useQuery({
        queryKey: ['singleBlog', id],
        queryFn: () => getSingleBlog(id)
    })

    const blogData: BlogData = useMemo(() => {
        if (!singleBlog?.data) return {
            title: 'Untitled Blog',
            description: '',
            createdAt: new Date().toISOString(),
            blogViews: 0,
            blogImage: '/placeholder-image.jpg',
            links: []
        };

        return {
            title: singleBlog.data.title || 'Untitled Blog',
            description: singleBlog.data.description || '',
            createdAt: singleBlog.data.createdAt || new Date().toISOString(),
            blogViews: singleBlog.data.blogViews || 0,
            blogImage: singleBlog.data.thumbnail!,
            links: singleBlog.data.link || [],
            readTime: singleBlog.data.readTime
        };
    }, [singleBlog]);

    const parsedDescription = useMemo(() => {
        try {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = blogData.description || '';
            return tempDiv.textContent || tempDiv.innerText || '';
        } catch (error) {
            console.error('Error parsing description:', error);
            return blogData.description || '';
        }
    }, [blogData.description]);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = blogData.title;

        let shareUrl = "";
        switch (platform) {
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || "")}`;
                break;
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case "email":
                shareUrl = `mailto:?subject=${encodeURIComponent(title || "")}&body=${encodeURIComponent(url)}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, "_blank");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Copied to clipboard");
    };

    if (isLoading) return <Loader />

    return (
        <div className='w-full px-4 md:px-12 lg:px-56 relative'>
            <Button
                className='absolute hidden lg:flex -top-4 left-4 md:left-12 z-50 rounded-full bg-primary p-0 text-white'
                isIconOnly
                onClick={() => window.history.back()}
            ><FaChevronCircleLeft /></Button>
            
            <h1 className='font-medium text-xl md:text-2xl w-full md:w-4/5 mt-8'>
                {blogData.title}
            </h1>
            
            <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between text-primary mt-4'>
                <div className='flex items-center gap-4 md:gap-8 font-bold'>
                    <h1>By Admin</h1>
                    <p>Published On: {blogData.createdAt?.split("T")[0]}</p>
                </div>
                <div className='flex items-center gap-2 font-bold text-primary mt-2 md:mt-0'>
                    <p>{blogData.readTime}</p>
                </div>
            </div>
            
            <div className='w-full h-[300px] md:h-[500px] mb-8 mt-6'>
                <Image 
                    src={blogData?.blogImage!} 
                    alt="blog image" 
                    width={1000} 
                    height={1000} 
                    className='object-cover h-full w-full rounded-md'
                />
            </div>
            
            <p className='my-8 md:my-12 text-justify text-base leading-7 md:leading-10'>
                {parseContentWithLinks(parsedDescription, Array.isArray(singleBlog?.data?.link) ? singleBlog?.data?.link : [singleBlog?.data?.link])}
            </p>
            
            <div className='flex gap-2 md:gap-4 items-center justify-end w-full mb-4'>
                <Button isIconOnly size='sm' className='bg-pink-400 text-white' onPress={handleCopy}>
                    <GoLink size={20} />    
                </Button>
                <Button isIconOnly size='sm' className='bg-primary text-white' onPress={() => handleShare('facebook')}>
                    <FiFacebook size={20} />
                </Button>
                <Button isIconOnly size='sm' className='bg-black text-white' onPress={() => handleShare('twitter')}>
                    <FaXTwitter size={20} />
                </Button>
                <Button isIconOnly size='sm' className='bg-red-400 text-white' onPress={() => handleShare('email')}>
                    <IoMdMail size={20} />
                </Button>
            </div>
        </div>
    )
}

export default SingleBlog
