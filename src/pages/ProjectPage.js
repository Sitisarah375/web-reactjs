import React from 'react'
import All from '../layout/All'
import Componentt from '../components/Componentt';

const data = {
    title : 'Form Tambah', 
    subtitle : 'Isi Form', 
    owner : [ 
      {nama:"Sarah", kelas:"12"}, 
      {nama: "Kahfi", kelas:"12"}, 
      {nama: "Aufa", kelas:"12"}
    ]};

function ProjectPage() {
  return (
        <All>
        <div> 
            <header className="card">
                <Componentt title={data.title} subtitle={data.subtitle} owner={data.owner} />
            </header>
        </div>
        </All>
  )
}

export default ProjectPage