from youtube
channel : Easy Tutorials
video : How to make 3D flip card using HTML And CSS

.card-inner{
    transform-style: preserve-3d;     /* imp */
    transition: transform 1s;
}

.back-face{
    transform: rotateY(180deg);
}
.card:hover .card-inner{
    transform: rotateY(-180deg);
}
