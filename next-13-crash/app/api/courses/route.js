import { NextResponse } from 'next/server'
import { v4 as uuidV4 } from 'uuid';
import courses from './data.json'

export async function GET() {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id: uuidV4(),
    title,
    description,
    level,
    link
  };

  courses.push(newCourse);

  return NextResponse.json(courses);
}